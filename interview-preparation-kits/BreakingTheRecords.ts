/* 
Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

Example

Scores are in the same order as the games played. She tabulates her results as follows:

                                     Count
    Game  Score  Minimum  Maximum   Min Max
     0      12     12       12       0   0
     1      24     12       24       0   1
     2      10     10       24       1   1
     3      24     10       24       1   1
Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.

Function Description

Complete the breakingRecords function in the editor below.

breakingRecords has the following parameter(s):

int scores[n]: points scored per game
Returns

int[2]: An array with the numbers of times she broke her records. Index 0 is for breaking most points records, and index 1 is for breaking least points records.
*/

function breakingRecords(scores: number[]): number[] {
  // Write your code here
  let min = 0;
  let max = 0;
  let currMax = scores[0];
  let currMin = scores[0];

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] < currMax) {
      min++;
      currMax = scores[i];
    } else if (scores[i] > currMin) {
      max++;
      currMin = scores[i];
    }
  }

  return [max, min];
}
