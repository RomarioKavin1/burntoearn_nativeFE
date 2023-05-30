const PointsCalculation = (heartPoints:number,caloriesBurnt:number,totalSteps:number) => {
    const MAX_HEART_POINTS = 100;
    const MAX_CALORIES_BURNT = 5000;
    const MAX_TOTAL_STEPS = 10000;
    
    const WEIGHT_HEART_POINTS = 0.5;
    const WEIGHT_CALORIES_BURNT = 0.3;
    const WEIGHT_TOTAL_STEPS = 0.2;
    const normalizedHeartPoints = heartPoints / MAX_HEART_POINTS;
    const normalizedCaloriesBurnt = caloriesBurnt / MAX_CALORIES_BURNT;
    const normalizedTotalSteps = totalSteps / MAX_TOTAL_STEPS;
  
    // Calculate the weighted scores
    const weightedHeartPoints = normalizedHeartPoints * WEIGHT_HEART_POINTS;
    const weightedCaloriesBurnt = normalizedCaloriesBurnt * WEIGHT_CALORIES_BURNT;
    const weightedTotalSteps = normalizedTotalSteps * WEIGHT_TOTAL_STEPS;
  
    // Calculate the overall weighted score
    const overallWeightedScore = weightedHeartPoints + weightedCaloriesBurnt + weightedTotalSteps;
  
    // Define the desired token minting range
    const minTokens = 0;
    const maxTokens = 1000;
  
    // Map the overall weighted score to the desired token minting range
    const tokenMinting = (overallWeightedScore * (maxTokens - minTokens)) + minTokens;
  
    // Round the token minting to the nearest integer
    return Math.round(tokenMinting);
}
export default PointsCalculation;