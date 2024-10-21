import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#0D0D0D",
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mainContent: {
    flex: 3,
    backgroundColor: "#1A1A1A",
    paddingRight: 24,
    paddingLeft: 24
  },
  form: {
   flexDirection: 'row',
   marginLeft: 2, 
   marginRight: 2, 
   position: "relative",
   bottom: 27
  },

  input: {
    flex: 1,
    backgroundColor: "#262626",
    borderRadius: 6,
    height: 56,
    marginRight: 3,
    fontSize: 16,
    paddingLeft: 16,
    borderWidth: 0.5,
  },

  inputOnFocus: {
    flex: 1,
    backgroundColor: "#262626",
    borderRadius: 6,
    height: 56,
    marginRight: 3,
    fontSize: 16,
    color: "#FFF", 
    paddingLeft: 16,
    borderWidth: 1,
    borderColor: "#8284FA"
  },
  button: {
    backgroundColor: "#1E6F9F",
    width: 56,
    height: 56,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center"
  },
  textButton: {
    fontSize: 40
  },

  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 20,
  },

  createdTasksContainer:{
    flexDirection: "row",
  },
  createdTasksLabel: {
    color: "#4EA8DE",
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10
  },
  createdTasksAmount:{
    backgroundColor: "#333333",
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 10,
    paddingBottom: 3,
    paddingTop: 3,
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    fontSize: 12,
    color: "#D9D9D9",
    fontWeight: "bold"
  },
  fineshedTasksAmount:{
    backgroundColor: "#333333",
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 3,
    paddingTop: 3,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  fineshedTasksLabel: {
    color: "#8284FA",
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10
  },
  finishedTasksContainer:{
    flexDirection: "row",
  },
  listEmpty: {
    alignItems: "center",
    gap: 18,
    marginTop: 60
  },
  listEmptyMainText: {
    color: "#333333",
    fontWeight: "bold"
  },
  listEmptyText: {
    textAlign: "center",
    maxWidth: 250,
    color: "#333333"
  }

});