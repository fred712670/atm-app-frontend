export default async function readFile(image) {
  return await new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = function (event) {
      resolve(event.target.result)
    }
    reader.onerror = function (error) {
      reject(error)
    }
    reader.readAsDataURL(image)
  })
}
