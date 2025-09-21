// producer.js
// Simple in-memory queue for AgriExpert consultation requests
const queue = [];

function sendConsultationRequest(farmerName, crop, issue) {
  const request = { farmerName, crop, issue, timestamp: new Date() };
  queue.push(request);
  console.log(`Consultation request submitted:`, request);
}

module.exports = { queue, sendConsultationRequest };
