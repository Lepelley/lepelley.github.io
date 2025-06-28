const sheetId = '1TllMv9rYmjvoXmHhO-qw5JUxJNwWIga3HIDrUl6s_Kk'
const sheetName = encodeURIComponent('Shinies')
const sheetURL = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`

const getData = async () => {
  const response = await fetch(sheetURL)
  const data = (await response.text()).split('\n')
  await data.shift()

  return await data.map(row => row.split(','))
}

const randomFromArray = (array) => array[Math.floor(Math.random() * array.length)]

const extractTwitchIdFromString = (string) => string.replaceAll('https://www.twitch.tv/bromatiquestv/clip/', '').replaceAll('"', '')
const rCFS = (string) => string.replaceAll('"', '')

const setClipFromArray = (selectedData) => {
  const urlPlayer = new URL(document.querySelector('#js-player').src)
  urlPlayer.searchParams.set('clip', extractTwitchIdFromString(selectedData[5]))
  document.querySelector('#js-player').src = `${decodeURI(urlPlayer.toString())}`
}

const changeTitleFromArray = (array) => {
  document.querySelector('h2').innerText =
    `${rCFS(array[0])} : ${rCFS(array[2])} (${rCFS(array[3])}) de ${rCFS(array[1])}`
}

const listClipsFromStreamer = (array) => {
  const clips = document.querySelector('#js-clips')
  clips.innerHTML = ''
  array.forEach(clip => {
    const clipElement = document.createElement('a')
    clipElement.href = `clip.html?clip=${extractTwitchIdFromString(clip[5])}`
    clipElement.innerText = `${rCFS(clip[2])} (${rCFS(clip[3])})`
    clipElement.classList.add('clip-list-item')
    clips.appendChild(clipElement)
  })
}
