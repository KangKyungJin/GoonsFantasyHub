# GoonsPlayFantasy

Web application for my Fantasy Football League:
- Cacluates power rankings for each member every week
- Pulls data from the ESPN Api via axios.get()
- Takes data retrieved from ESPN and visualizes it via graphs.

## Planned Updates
- Calculate and store power rankings to each member
- Create graphs for power ranking, positional ranking, and maybe for points for / points against
- *Need to finalize what backend data should look like* 
- Incorporate OIL Power Ranking to calculate power rankings: ((avg score x 6) + ((high schore + low score) x 2) + ((winning% x 200) x 2)) / 10

## Changes

9/17/2020:
- Added form component, create and update member pages
- Adjusted member models to further match my goals

9/16/2020:
- Played around with Recharts to learn its functions
- Switched from linechart to scatterline for recharts as it would seem most fitting for the type of graph I want to visualize with my data
- Dropdown added to nav to select year of Fantasy Football season, data will correspond accordingly.

### Built With
- React
- MongoDB
- Mongoose
- Express
- React-Bootstrap
- Recharts
- Axios
- Cors
- @Reach/Router

### Special Thanks To
- https://dusty-turner.netlify.app/post/espn-fantasy-football-v3-api-an-r-solution/
- https://www.reddit.com/r/fantasyfootball/comments/aq284h/espn_api/
