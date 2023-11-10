
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Alrykemes/Js-developer-portifolio/portifolio-base/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}
