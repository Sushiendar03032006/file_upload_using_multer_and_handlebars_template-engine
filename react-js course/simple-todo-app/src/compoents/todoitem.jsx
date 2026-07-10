import { Card, CardActions, CardContent, Typography, Button } from "@mui/material";

function Todoitem({ fetchlistofSingletodos, todo }) {
  return (
    <div>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          // ❌ WRONG: Width should be lowercase
          width: 300,
          height: 220,
          justifyContent: "space-around",
          border: "2px solid green",
          backgroundColor:"green",
          color:"white"
        }}
      >
        <CardContent>
          <Typography variant="h5" color="white">
            {todo?.todo}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            sx={{
              backgroundColor: "black",
              color: "white",
              opacity: 0.75,
              "&:hover": {
                backgroundColor: "black",
                color: "white",
                opacity: 1,
              },
            }}
            // ✅ Correct function call to open dialog
            onClick={() => fetchlistofSingletodos(todo?.id)}
          >
            Details
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Todoitem;
