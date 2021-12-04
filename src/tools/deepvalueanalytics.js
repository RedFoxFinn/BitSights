
// 
// 

// findDownwardTrends is tool function to find bearish (downward) market value trends from date/value dataset 

const findDownwardTrends = (dataset = null) => {
  let currentTrend = 0;
  let trends = [[]];
  if (dataset && dataset.length > 0) {
    for(let current = 0; current < dataset.length; current++) {
      const datapairCurrent = dataset[current];
      const datapairNext = dataset[current+1];
      if (datapairCurrent?.value > datapairNext?.value) {
        trends[currentTrend].push(datapairCurrent);
      } else if (datapairCurrent?.value < datapairNext?.value) {
        trends[currentTrend].push(datapairCurrent);
        trends.push([]);
        currentTrend += 1;
      } else if (!datapairNext) {
        trends[currentTrend].push(datapairCurrent);
      }
    }
    return trends.filter((trend) => trend.length > 1);
  } else {
    return null;
  }
};

// findDownwardTrends is tool function to find bullish (upward) market value trends from date/value dataset 

const findUpwardTrends = (dataset = null) => {
  let currentTrend = 0;
  let trends = [[]];
  if (dataset && dataset.length > 0) {
    for(let current = 0; current < dataset.length; current++) {
      const datapairCurrent = dataset[current];
      const datapairNext = dataset[current+1];
      if (datapairCurrent?.value < datapairNext?.value) {
        trends[currentTrend].push(datapairCurrent);
      } else if (datapairCurrent?.value > datapairNext?.value) {
        trends[currentTrend].push(datapairCurrent);
        trends.push([]);
        currentTrend += 1;
      } else if (!datapairNext) {
        trends[currentTrend].push(datapairCurrent);
      }
    }
    return trends.filter((trend) => trend.length > 1);
  } else {
    return null;
  }
};

// findLongestDownwardTrend is tool function that will return the longest found bearish trend

export const findLongestDownwardTrend = (dataset = null) => {
  const sortedTrends = findDownwardTrends(dataset).sort((a, b) => a.length - b.length);
  return sortedTrends[sortedTrends.length-1] ?? null;
};

// findLongestUpwardTrend is tool function that will return the longest found bullish trend

export const findLongestUpwardTrend = (dataset = null) => {
  const sortedTrends = findUpwardTrends(dataset).sort((a, b) => a.length - b.length);
  return sortedTrends[sortedTrends.length-1] ?? null;
};

// 

export const findOptimalBuyingPoint = (dataset = null) => {};

// 

export const findOptimalSellingPoint = (dataset = null) => {};