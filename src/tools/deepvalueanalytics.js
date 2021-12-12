
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

// findBuyingPoint is tool function that will find and return the safest bitcoin buying day on the ranged dataset

export const findBuyingPoint = (dataset = null) => {
  if (dataset && dataset.length > 0) {
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
    } else if (lowest.index < dataset.length -1) {
      const afterHighest = dataset.filter((datapoint) => datapoint?.index > highest?.index);
      return afterHighest?.length > 0 ? afterHighest.sort((a, b) => a?.value - b?.value)[0] : null;
    } else if (highest.index > 0) {
      const beforeHighest = dataset.filter((datapoint) => datapoint?.index < highest?.index);
      return beforeHighest?.length > 0 ? beforeHighest.sort((a,b) => a?.value - b?.value)[0] : null;
    } else {
      return null;
    }
  } else {
    return null;
  }
};

// findBuyingPoint is tool function that will find and return the safest bitcoin se day on the ranged dataset

export const findSellingPoint = (dataset = null) => {
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
    } else if (lowest?.index > 0) {
      const beforeLowest = dataset.filter((datapoint) => datapoint?.index < lowest?.index);
      return beforeLowest?.length > 0 ? beforeLowest.sort((a,b) => b?.value - a?.value)[0] : null;
    } else if (highest?.index < dataset.length -1) {
      const afterLowest = dataset.filter((datapoint) => datapoint?.index > lowest?.index);
      return afterLowest?.length > 0 ? afterLowest.sort((a, b) => b?.value - a?.value)[0] : null;
    } else {
      return null;
    }
  } else {
    return null;
  }
};