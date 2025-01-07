
export default defineEventHandler(async (event) => {
    const data = await $fetch("http://127.0.0.1:8000/api/specialcontent", {
        method: 'GET'
    })
    return data
})