import { StyleSheet } from "react-native";

export const style= StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#333333",
    backgroundColor: "#262626",
    borderRadius: 8,
    marginTop: 8,
    flexDirection: "row",
    padding: 15,
    gap: 7,
    alignContent: "space-between"
  },
  taskDescriptionContainer: {
    maxWidth: 250
  },
  taskDescription: {
    color: "#F2F2F2",
  },

  button: {
   marginLeft: "auto"
  },


});