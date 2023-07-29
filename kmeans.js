const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; // Replace with your MongoDB connection URI
const client = new MongoClient(uri);

async function connectToDB() {
  try {
    await client.connect();
    const db = client.db('unilens'); // Replace 'yourDatabaseName' with your actual database name
    return db;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

async function fetchAndPreprocessData(db) {
  try {
    const collection = db.collection('college_data'); // Replace 'yourCollectionName' with the name of your collection containing college data
    const colleges = await collection.find().toArray();

    // Extract SAT scores
    const satScores = colleges.map(college => college.SATAVG);

    return satScores;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

function findNearestCentroid(dataPoint, centroids) {
  let minDistance = Number.MAX_VALUE;
  let nearestCentroidIndex = -1;

  centroids.forEach((centroid, index) => {
    const distance = Math.abs(dataPoint - centroid);
    if (distance < minDistance) {
      minDistance = distance;
      nearestCentroidIndex = index;
    }
  });

  return nearestCentroidIndex;
}

function calculateNewCentroids(clusteredData) {
  const newCentroids = clusteredData.map(cluster => {
    const sum = cluster.reduce((acc, val) => acc + val, 0);
    return sum / cluster.length;
  });

  return newCentroids;
}

function kMeansClustering(data, k, maxIterations = 100) {
  // Initialize centroids randomly
  let centroids = data.slice(0, k);

  let iterations = 0;
  while (iterations < maxIterations) {
    const clusters = new Array(k).fill().map(() => []);

    // Assign data points to the nearest centroid
    data.forEach(dataPoint => {
      const nearestCentroidIndex = findNearestCentroid(dataPoint, centroids);
      clusters[nearestCentroidIndex].push(dataPoint);
    });

    // Calculate new centroids based on the clustered data
    const newCentroids = calculateNewCentroids(clusters);

    // Check if centroids have changed
    if (JSON.stringify(newCentroids) === JSON.stringify(centroids)) {
      break;
    }

    centroids = newCentroids;
    iterations++;
  }

  return centroids;
}


async function main() {
  const db = await connectToDB();
  const satScores = await fetchAndPreprocessData(db);

  // Let's assume the user provides the number of clusters (k) through their input
  const k = 30; // You can change this according to user input

  const centroids = kMeansClustering(satScores, k);
  console.log('Cluster Centroids:', centroids);

  // You can also label colleges based on the calculated centroids
  const collegeLabels = satScores.map(satScore =>
    findNearestCentroid(satScore, centroids)
  );
  console.log('College Labels:', collegeLabels);

  // Now you can use the 'collegeLabels' to group and display colleges in their respective clusters.
  // You can also store the labels back to the MongoDB for future reference.
}

main().catch(console.error);


