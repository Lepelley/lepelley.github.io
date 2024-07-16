document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#input-vma').addEventListener('input', (event) => {
    changeSpeed(
      event.target.value,
      document.querySelector('#input-vitesse-1'),
      document.querySelector('#input-percent-1'),
      document.querySelector('#input-time-1')
    )

    changeSpeed(
      event.target.value,
      document.querySelector('#input-vitesse-2'),
      document.querySelector('#input-percent-2'),
      document.querySelector('#input-time-2')
    )

    changeSpeed(
      event.target.value,
      document.querySelector('#input-vitesse-3'),
      document.querySelector('#input-percent-3'),
      document.querySelector('#input-time-3')
    )

    changeSpeed(
      event.target.value,
      document.querySelector('#input-vitesse-4'),
      document.querySelector('#input-percent-4'),
      document.querySelector('#input-time-4')
    )

    changeSpeed(
      event.target.value,
      document.querySelector('#input-vitesse-5'),
      document.querySelector('#input-percent-5'),
      document.querySelector('#input-time-5')
    )
  })

  document.querySelector('#input-percent-1').addEventListener('input', (event) => {
    changeSpeed(
      document.querySelector('#input-vma').value,
      document.querySelector('#input-vitesse-1'),
      event.target,
      document.querySelector('#input-time-1')
    )
  })

  document.querySelector('#input-percent-2').addEventListener('input', (event) => {
    changeSpeed(
      document.querySelector('#input-vma').value,
      document.querySelector('#input-vitesse-2'),
      event.target,
      document.querySelector('#input-time-2')
    )
  })

  document.querySelector('#input-percent-3').addEventListener('input', (event) => {
    changeSpeed(
      document.querySelector('#input-vma').value,
      document.querySelector('#input-vitesse-3'),
      event.target,
      document.querySelector('#input-time-3')
    )
  })

  document.querySelector('#input-percent-4').addEventListener('input', (event) => {
    changeSpeed(
      document.querySelector('#input-vma').value,
      document.querySelector('#input-vitesse-4'),
      event.target,
      document.querySelector('#input-time-4')
    )
  })

  document.querySelector('#input-percent-5').addEventListener('input', (event) => {
    changeSpeed(
      document.querySelector('#input-vma').value,
      document.querySelector('#input-vitesse-5'),
      event.target,
      document.querySelector('#input-time-5')
    )
  })
})

const changeSpeed = (speed, vitesse, percent, time) => {
  vitesse.innerHTML = rounded(speed * (percent.value / 100))
  time.innerHTML = toTime(rounded(60 / vitesse.innerHTML))
}

const rounded = (value) => {
  return Math.round(value * 100) / 100
}

const toTime = (value) => {
  const minutes = Math.trunc(value)
  const seconds = Math.trunc(60 * (value - minutes))
  return (minutes > 9 ? minutes : '0' + minutes) + ':' + seconds
}
