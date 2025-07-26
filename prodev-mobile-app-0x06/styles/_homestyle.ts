// styles/_homestyle.ts
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },

  // Search Bar
  searchGroup: {
    padding: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 16,
    color: "#333",
  },
  searchControl: {
    paddingVertical: 6,
    paddingHorizontal: 4,
    fontSize: 16,
    color: "#555",
  },
  searchButton: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 10,
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  // Filter Scroll Group
  filterGroup: {
    flexDirection: "row",
    paddingHorizontal: 16,
    alignItems: "center",
  },
  filterContainer: {
    width: 72,
    height: 72,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },

  // Listings
  listingContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
  },

  // Pagination
  paginationContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  showMoreButton: {
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
  },
  showMoreButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
