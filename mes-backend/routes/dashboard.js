const express = require('express');
const router = express.Router();

router.get('/production-status', (req, res) => {
  const productionData = {
      labels: ['Aug 24', 'Sept 24', 'Oct 24', 'Nov 24', 'Dec 24', 'Jan 25'],
      data: [23,28,20,25,25,32]
  };
  res.json(productionData);
});
router.get('/product-defect-rates', (req, res) => {
  const defectData = {
      labels: ['Aug 24', 'Sept 24', 'Oct 24', 'Nov 24', 'Dec 24', 'Jan 25'],
      data: [0.3,0.4,0.5,0.4,0.7,0.6]
  };
  res.json(defectData);
});
router.get('/machine-utilization', (req, res) => {
  const utilizationData = {
      labels: ['Machine 1', 'Machine 2', 'Machine 3', 'Machine 4'],
      data: [75, 50, 90, 60]
  };
  res.json(utilizationData);
});

module.exports = router;