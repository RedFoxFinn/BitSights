
// deepvalueanalytics.js
// alanytics toolset to find trends in datasets

// findDownwardTrends is tool function to find bearish (downward) market value trends from date/value dataset 

export const findDownwardTrends = (dataset = null) => {
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
    return trends.filter((trend) => trend.length > 0);
  } else {
    return null;
  }
};

// findDownwardTrends is tool function to find bullish (upward) market value trends from date/value dataset 

export const findUpwardTrends = (dataset = null) => {
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
    return trends.filter((trend) => trend.length > 0);
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

// findSafeBuingPoint is tool function that will find and return the safest bitcoin buying day on the ranged dataset

export const findSafeBuyingPoint = (dataset = null) => {
  if (dataset) {
    let lowest = null;
    let highest = null;
    dataset.forEach((datapoint) => {
      if (lowest === null || lowest?.value > datapoint?.value) {
        lowest = datapoint;
      }
      if (highest === null || highest?.value < datapoint?.value) {
        highest = datapoint;
      }
    });
    if (lowest?.datetime < highest?.datetime) {
      return lowest;
    } else {
      const beforeHighest = dataset.filter((datapoint) => datapoint?.datetime < highest?.datetime);
      return beforeHighest?.length > 0 ? beforeHighest.sort((a,b) => a.value - b.value)[0] : null;
    }
  } else {
    return null;
  }
};

// 

export const findRiskyBuingPoint = (dataset = null) => {};

// 

export const findSafeSellingPoint = (dataset = null) => {
  if (dataset) {
    let lowest = null;
    let highest = null;
    dataset.forEach((datapoint) => {
      if (lowest === null || lowest?.value > datapoint?.value) {
        lowest = datapoint;
      }
      if (highest === null || highest?.value < datapoint?.value) {
        highest = datapoint;
      }
    });
    if (highest?.datetime < lowest?.datetime) {
      return highest;
    } else {
      const beforeLowest = dataset.filter((datapoint) => datapoint?.datetime > lowest?.datetime);
      return beforeLowest?.length > 0 ? beforeLowest.sort((a,b) => a.value - b.value)[0] : null;
    }
  } else {
    return null;
  }
};

// 

export const findRiskySellingPoint = (dataset = null) => {};