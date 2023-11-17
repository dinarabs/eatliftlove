import { useEffect, useState } from 'react'
import fetchImages from '../services/unsplashImageService'
import getWODs from '../services/workoutService'
import crossfitBanner from '../assets/crossfit-banner.jpg'

const Workout = () => {
  const [backgroundImage, setBackgroundImage] = useState(crossfitBanner)
  const [data, setData] = useState([])

  // Check if 24hr passed since lastUpdatedTime
  const lastUpdatedTime = localStorage.getItem('lastUpdatedTime')
  const timeDiff = Date.now() - lastUpdatedTime
  const twentyFourHours = 4000 // 86400000 -> 24 hours in milliseconds

  useEffect(() => {
    const loadWOD = async () => {
      const WODs = await getWODs()
      const images = await fetchImages('crossfit')

      if (!lastUpdatedTime || timeDiff > twentyFourHours) {
        // Randomly select a WOD
        const randomWorkoutIndex = Math.floor(Math.random() * WODs.length)
        const randomImageIndex = Math.floor(Math.random() * images.length)

        setBackgroundImage(images[randomImageIndex].urls.regular)
        setData(WODs[randomWorkoutIndex])
        // save to localStorage the indexes and time
        localStorage.setItem('wodIndex', randomWorkoutIndex)
        localStorage.setItem('imageIndex', randomImageIndex)
        localStorage.setItem('lastUpdatedTime', Date.now())
      } else {
        // Retrieve last saved from localStorage
        const storedWodIndex = localStorage.getItem('wodIndex')
        const storedImageIndex = localStorage.getItem('imageIndex')

        if (storedWodIndex !== null && storedImageIndex !== null) {
          setData(WODs[storedWodIndex])
          setBackgroundImage(images[storedImageIndex].urls.regular)
        }
      }
    }

    loadWOD() // Call this function when component mounts

    const interval = setInterval(loadWOD, 4000) // 3600000 -> 1 hour

    // Clear the interval when the component unmounts
    return () => clearInterval(interval)
  }, [lastUpdatedTime, timeDiff])

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="w-full h-[690px] bg-cover bg-center flex justify-center items-center p-5"
    >
      <div className="bg-black bg-opacity-75 rounded-md p-3">
        <h1 className="text-3xl font-bold text-center text-white p-3">
          Workout of the Day
        </h1>
        <p className="text-center">
          {' '}
          ⚡️Powered by{' '}
          <a className="hover:underline" href="https://www.crossfitmins.com/">
            {' '}
            Crossfit MINS
          </a>
          ⚡️
        </p>
        <p className="text-center text-white p-3">
          {data.description &&
            data.description.split('<br>').map((line, i) => (
              <span key={i}>
                {line}
                {i !== data.description.split('<br>').length - 1 && <br />}
              </span>
            ))}
          <br />
          {data.levels &&
            data.levels.split('<br>').map((line, i) => (
              <span key={i}>
                {line}
                {i !== data.description.split('<br>').length - 1 && <br />}
              </span>
            ))}
        </p>
      </div>
    </div>
  )
}

export default Workout
