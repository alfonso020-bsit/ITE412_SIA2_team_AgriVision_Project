const { queue, sendConsultationRequest } = require('./producer');

// preload some requests (like the producer would do)
sendConsultationRequest("Juan Dela Cruz", "Rice", "Brown spots on leaves");
sendConsultationRequest("Maria Santos", "Rice", "Possible tungro infection");
sendConsultationRequest("Pedro Cruz", "Rice", "Stunted growth and yellowing");

function processConsultations() {
  setInterval(() => {
    if (queue.length > 0) {
      const request = queue.shift();
      let diagnosis;
      if (request.issue.toLowerCase().includes("spots")) {
        diagnosis = "Likely Rice Blast - apply recommended fungicide.";
      } else if (request.issue.toLowerCase().includes("tungro")) {
        diagnosis = "Possible Tungro Virus - control green leafhoppers.";
      } else {
        diagnosis = "Further inspection required - schedule field visit.";
      }
      console.log(`Consultation for ${request.farmerName} → ${diagnosis}`);
    }
  }, 2000);
}

processConsultations();
