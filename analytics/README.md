# Analytics

## True Shooting Pct (TS%)

True shooting percentage is a measure of shooting efficiency that takes into account field goals, 3-point field goals, and free throws.

:::tip TS% Formula
= Points / (2 \* FieldGoalsAttempted + 0.44 \* FreeThrowsAttempted)
:::

:::warning Try It Out
<TrueShooting/>
:::

## Effective Field Goal Pct (EFG%)

Effective field goal percentage adjusts field goal percentage for the fact that a 3-point field goal is worth one more point than a 2-point field goal. For example, suppose Player A goes 4 for 10 with 2 threes, while Player B goes 5 for 10 with 0 threes. Each player would have 10 points from field goals, and thus would have the same effective field goal percentage (50%).

:::tip EFG% Formula
= (FieldGoalsMade + 0.5 \* 3PointersMade) / FieldGoalsAttempted
:::

:::warning Try It Out
<EffectiveFieldGoal/>
:::

## Possessions

Estimates possessions based on both the team's statistics and their opponent's statistics, then averages them to provide a more stable estimate. Please see the article Calculating Individual Offensive and Defensive Ratings for more information.

:::tip Possessions Formula
0.5 _ ((Tm FGA + 0.4 _ Tm FTA - 1.07 _ (Tm ORB / (Tm ORB + Opp DRB)) _ (Tm FGA - Tm FG) + Tm TOV) + (Opp FGA + 0.4 _ Opp FTA - 1.07 _ (Opp ORB / (Opp ORB + Tm DRB)) \* (Opp FGA - Opp FG) + Opp TOV))
:::

:::warning Try It Out
<Possessions/>
:::

## Value Over Replacement Player (VORP)

Value Over Replacement Player (available since the 1973-74 season in the NBA); a box score estimate of the points per 100 TEAM possessions that a player contributed above a replacement-level (-2.0) player, translated to an average team and prorated to an 82-game season. Multiply by 2.70 to convert to wins over replacement.

## Assist Percentage (AST%)

Assist percentage is an estimate of the percentage of teammate field goals a player assisted while he was on the floor.

:::warning Try It Out
<AssistPct/>
:::

## Block Percentage (BLK%)

Block percentage is an estimate of the percentage of opponent two-point field goal attempts blocked by the player while he was on the floor.

:::warning Try It Out
<BlockPct/>
:::

## Box Plus/Minus (BPM)

a box score estimate of the points per 100 possessions that a player contributed above a league-average player, translated to an average team.

## Offensive Box Plus/Minus (OBPM)

Hello

## Defensive Box Plus/Minus (DBPM)

Hello

## Defensive Rebound Percentage (DRB%)

## Offensive Rating (ORtg)

for players it is points produced per 100 posessions, while for teams it is points scored per 100 possessions.

## Defensive Rating (DRtg)

for players and teams it is points allowed per 100 posessions.

## Offensive Win Shares (OWS)

Win Shares; an estimate of the number of wins contributed by a player.

## Defensive Win Shares (DWS)

Win Shares; an estimate of the number of wins contributed by a player.

## Game Score

the formula is . Game Score was created by John Hollinger to give a rough measure of a player's productivity for a single game. The scale is similar to that of points scored, (40 is an outstanding performance, 10 is an average performance, etc.).

:::tip Game Score Formula
PTS + 0.4 _ FG - 0.7 _ FGA - 0.4*(FTA - FT) + 0.7 * ORB + 0.3 _ DRB + STL + 0.7 _ AST + 0.7 _ BLK - 0.4 _ PF - TOV
:::

<GameScore/>

## Four Factors

Dean Oliver's "Four Factors of Basketball Success"; please see the article Four Factors for more information.

## Pythagorean Wins/Losses

Pythagorean Wins; the formula is G \* (Tm PTS14 / (Tm PTS14 + Opp PTS14)). The formula was obtained by fitting a logistic regression model with log(Tm PTS / Opp PTS) as the explanatory variable. Using this formula for all BAA, NBA, and ABA seasons, the root mean-square error (rmse) is 3.14 wins. Using an exponent of 16.5 (a common choice), the rmse is 3.48 wins. (Note: An exponent of 10 is used for the WNBA.)

Pythagorean Losses; the formula is G - W Pyth.

## WS/48

WS/48 - Win Shares Per 48 Minutes (available since the 1951-52 season in the NBA); an estimate of the number of wins contributed by the player per 48 minutes (league average is approximately 0.100).

## Usage (USG%)

Usage percentage is an estimate of the percentage of team plays used by a player while he was on the floor.

:::tip Usage Formula
100 _ ((FGA + 0.44 _ FTA + TOV) _ (Tm MP / 5)) / (MP _ (Tm FGA + 0.44 \* Tm FTA + Tm TOV))
:::

<Usage/>

## Total Rebound Pct (TRB%)

Total rebound percentage is an estimate of the percentage of available rebounds a player grabbed while he was on the floor.

:::tip TRB% Formula
100 _ (TRB _ (Tm MP / 5)) / (MP \* (Tm TRB + Opp TRB))
:::

<TotalRebPct/>

## Turnover Percentage (TOV%)

Turnover percentage is an estimate of turnovers per 100 plays.

:::tip TOV% Formula
100 \* Turnovers / (FGA + 0.44 \* FTA + TOV)
:::

<TurnoverPct/>

## Steal Percentage (STL%)

Steal Percentage is an estimate of the percentage of opponent possessions that end with a steal by the player while he was on the floor.

:::tip TOV% Formula
100 _ (STL _ (Tm MP / 5)) / (MP \* Opp Poss)
:::

<StealPct/>

## Player Efficiency Rating (PER)

Player Efficiency Rating was developed by ESPN writer John Hollinger. PER is a measure of player efficiency taking into account a player's per-minute performance adjusted for pace.

## Pace

Pace is the number of possessions per 48 minutes by a team.

:::tip Formula
48 _ ((Tm Poss + Opp Poss) / (2 _ (Tm MP / 5)))
:::

<Pace/>

## Offensive Rebound Percentage (ORB%)

Offensive rebound percentage is an estimate of the percentage of available offensive rebounds a player grabbed while he was on the floor.

:::tip Formula
100 _ (ORB _ (Tm MP / 5)) / (MP \* (Tm ORB + Opp DRB))
:::

<OffensiveRebPct/>

## Points Per Possession (PPP)

Hello

:::tip TPR% Formula
TotalPoints / Possessions
:::

<PPP/>

## Points Per Shot Attempt (PSA)

Hello

:::tip TPR% Formula
TotalPoints / ShotAttempts
:::

<PSA/>

## 3 Point Rate

Percentage of field goal attempts from 3 point range

:::tip TPR% Formula
ThreePointAttempts / FieldGoalAttempts
:::

<ThreePtRate/>

## 2 Point Rate

Percentage of field goal attempts from 2 point range

:::tip TPR% Formula
TwoPointAttempts / FieldGoalAttempts
:::

<TwoPtRate/>

## Free Throw (FT) Rate

Percentage of free throw attempts to field goal attempts

:::tip TPR% Formula
FreeThrowAttempts / FieldGoalAttempts
:::

<FTRate/>

## Plus/Minus Rating

the difference between their team's total scoring versus their opponent's when the player is in the game.

:::tip Hello
the difference between their team's total scoring versus their opponent's when the player is in the game.
:::

<PlusMinus/>
