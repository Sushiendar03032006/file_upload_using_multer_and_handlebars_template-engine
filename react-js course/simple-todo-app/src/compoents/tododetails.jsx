import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";


function Tododetails({ opendialog, setopendialog, showdetails, setshowdetails }) {
  // ❌ WRONG:
  // return
  //   <Fragment> ... </Fragment> — This causes nothing to render

  // ✅ FIXED: wrap JSX in parentheses to return properly
  return (
 
      <Dialog onClose={() => setopendialog(false)} open={opendialog}>
        <DialogContent>
          <h1>ID: {showdetails?.id}</h1>
          <h1>Status: {showdetails?.completed ? "Completed" : "Not Completed"}</h1>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setopendialog(false);
              setshowdetails(null);
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>

  );
}

export default Tododetails;
