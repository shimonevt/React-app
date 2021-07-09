let initialState = {
  news: [
    {
      header: "New Honda Civic",
      mainText: "Now with turbo-VTEC",
      img: "https://s.auto.drom.ru/i24241/c/photos/fullsize/honda/civic/gen473_honda_civic_935581.jpg",
    },
    {
      header: "New electrified concept of IZH",
      mainText: "....",
      img: "https://images11.popmeh.ru/upload/img_cache/18c/18c862e5753d8e7840ff544d751e752d_cropped_620x444.jpg",
    },
  ]
}

const sideBarReducer = (state = initialState, action) => {
  return state;
};

export default sideBarReducer;
