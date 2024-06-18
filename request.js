import Request from "./axios"

export function sendOtpAction({searchTxt}) {
    return new Promise( async (next) => {
        console.log("searchTxt",searchTxt)
        try {
            let {data: resp} = await Request.get(`/v2/everything?q=${searchTxt}&from=2024-05-18&sortBy=publishedAt&apiKey=2a23b0b46ea94f839aeef592bf82cb7b`)
            next(resp)
        } catch(e) {
            console.log(e)
            next({message: "Something Went Wrong, Try Again"})
        }
    })
}
