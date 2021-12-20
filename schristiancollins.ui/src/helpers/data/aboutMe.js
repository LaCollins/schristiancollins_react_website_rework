import axios from 'axios'
const wpUrl = 'http://localhost:8888/wp-json/wp/v2'

const getAboutMePage = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${wpUrl}/pages/12`)
      .then((res) => {
        console.log(res)
        const pageObj = res.data.acf;

        resolve(pageObj)
      })
      .catch((err) => reject(err))
  })

// const getWPHomePage = () =>
//   new Promise((resolve, reject) => {
//     axios
//       .get(`${wpUrl}/pages/151`)
//       .then((res) => {
//         const pageObj = res.data.acf.primary_sections

//         resolve(pageObj)
//       })
//       .catch((err) => reject(err))
//   })

// const getWPContactPage = () =>
//   new Promise((resolve, reject) => {
//     axios
//       .get(`${wpUrl}/pages/70`)
//       .then((res) => {
//         const pageObj = res.data.acf.contact_page_content[0].content_info
//         const content = []

//         if (pageObj != null) {
//           Object.keys(pageObj).forEach((item) => {
//             const newContent = pageObj[item]
//             newContent.id = item
//             content.push(newContent)
//           })
//         }
//         resolve(content)
//       })
//       .catch((err) => reject(err))
//   })

// const getWPPodcastPage = () =>
//   new Promise((resolve, reject) => {
//     axios
//       .get(`${wpUrl}/pages/86`)
//       .then((res) => {
//         const pageObj = res.data.acf.podcast_page

//         resolve(pageObj)
//       })
//       .catch((err) => reject(err))
//   })

// const getWPCovidPage = () =>
//   new Promise((resolve, reject) => {
//     axios
//       .get(`${wpUrl}/pages/106`)
//       .then((res) => {
//         const pageObj = res.data.acf.covid_page

//         resolve(pageObj)
//       })
//       .catch((err) => reject(err))
//   })

// const getNewsletter = () =>
//   new Promise((resolve, reject) => {
//     axios
//       .get(`${wpUrl}/newsletter`)
//       .then((res) => {
//         const pageObj = res.data

//         resolve(pageObj)
//       })
//       .catch((err) => reject(err))
//   })

// const getEvents = () =>
//   new Promise((resolve, reject) => {
//     axios
//       .get('https://wordpress.emergencyltc.org/wp-json/tribe/events/v1/events')
//       .then((res) => {
//         const pageObj = res.data.events

//         resolve(pageObj)
//       })
//       .catch((err) => reject(err))
//   })

// const getWPMailingListSignUp = () =>
//   new Promise((resolve, reject) => {
//     axios
//       .get(`${wpUrl}/pages/203`)
//       .then((res) => {
//         const pageObj = res.data.acf
//         resolve(pageObj)
//       })
//       .catch((err) => reject(err))
//   })

// const getWPOshaCompliancePage = () =>
//   new Promise((resolve, reject) => {
//     axios
//       .get(`${wpUrl}/pages/248`)
//       .then((res) => {
//         const pageObj = res.data.acf.covid_page
//         resolve(pageObj)
//       })
//       .catch((err) => reject(err))
//   })

export default {
    getAboutMePage
}
