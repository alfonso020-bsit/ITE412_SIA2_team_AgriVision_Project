// demoProducer.js
// Simulates farmers submitting consultation requests
const { sendConsultationRequest } = require('./producer');

// Push sample consultation requests into the queue
sendConsultationRequest("Juan Dela Cruz", "Rice", "Brown spots on leaves");
sendConsultationRequest("Maria Santos", "Rice", "Possible tungro infection");
sendConsultationRequest("Pedro Cruz", "Rice", "Stunted growth and yellowing");
