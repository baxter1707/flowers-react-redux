export const LOAD_FLOWER_LIST = "LOAD_FLOWER_LIST"


export const loadFlowerList = () => {
  return dispatch => {

    let url = 'https://flowers.vapor.cloud/flowers'
    fetch(url)
    .then(response => response.json())
    .then(json => dispatch(loadFlowers(json)))

  }
}

export const loadFlowers = (flowers) => {
  return {
    type : LOAD_FLOWER_LIST,
    flowers : flowers
  }
}
