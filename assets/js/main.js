function updateProfileInfo(profileData) {
    const photoEl = document.getElementById("profile.photo");
    const nameEl = document.getElementById("profile.name");
    const infoJobEl = document.getElementById("profile.title");
    const locationEl = document.getElementById("profile.location");
    const infoPhoneEl = document.getElementById("profile.phone");
    const infoEmailEl = document.getElementById("profile.email");

    photoEl.src = profileData.foto
    photoEl.alt = profileData.nome
    nameEl.innerHTML = profileData.nome;
    infoJobEl.innerHTML = profileData.titulo;
    locationEl.innerHTML = profileData.localidade.cidade +
        ', ' + profileData.localidade.estado +
        ' - ' + profileData.localidade.pais;
    infoPhoneEl.innerHTML = profileData.telefone
    infoEmailEl.innerHTML = profileData.email
}

function updateHardSkills(profileData) {
    const HardSkillsEl = document.getElementById("profile.hard.skills")
    HardSkillsEl.innerHTML = profileData.skills.hardSkills.map(skills => 
    `<li><img src="${skills.logo}" alt="${skills.nome} "title="${skills.nome}"></li>`).join('')
}

function updateHardSkillsImprovement(profileData) {
    const HardSkillsAperfeicoamentoEl = document.getElementById("profile.hard.skills.aperfeicoamento")
    HardSkillsAperfeicoamentoEl.innerHTML = profileData.skills.hardSkillsAperfeicoamento.map(skills => `<li>
    <img src="${skills.logo}" 
    alt="${skills.nome}"
    title="${skills.nome}"></li>`)
    .join('')
}
function updateSoftSkills(profileData) {
    const softSkillsEl = document.getElementById("profile.skills.softSkills");
    softSkillsEl.innerHTML = profileData.skills.softSkills.map(skills => `<li>${skills}</li>`).join('')
}

function updateLanguages(profileData) {
    const languagesEl = document.getElementById("profile.languages")
    languagesEl.innerHTML = profileData.idiomas.map(language => `<li>${language.nome} - ${language.nivel}</li>`)
    .join('')
}

function updateEducation(profileData) {
    const educationEl = document.getElementById("profile.education")
    educationEl.innerHTML = profileData.educacao.map(education => 
    `<li>
    <h3> ${education.nome} </h3>
    <p class="descricao">${education.descricao}</p>
    <p class="instituicao">${education.instituicao}</p>
    <p class="period">
        <span id="inicio"> ${education.periodo.inicio } </span>
        -
        <span id="fim"> ${ education.periodo.fim} </span>
    </p>
    </li>`)
    .join('')
}

function updateProjects(profileData) {
    const projectsEl = document.getElementById("profile.portifolio")
    projectsEl.innerHTML = profileData.portfolio.map(project => 
    `<li>
    <h3 class="title github">${project.nome}</h3>
    <a href="${project.gitHub}" target="_blank">${project.gitHub}</a>
    </li>`)
    .join('')
}

function updateExperiences(profileData) {
    const experiencesEl = document.getElementById("profile.experiences")
    experiencesEl.innerHTML = profileData.experiencias.map(expericence => `<li>
    <h3 class="title">${expericence.nome}</h3>
    <p class="period">${expericence.periodo.inicio} . ${expericence.periodo.fim}</p>
    <p>
    ${expericence.descricao}
    </p>
</li>`)
    .join('')
}

(async () => {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
    updateSoftSkills(profileData);
    updateHardSkills(profileData);
    updateHardSkillsImprovement(profileData);
    updateLanguages(profileData);
    updateEducation(profileData);
    updateProjects(profileData);
    updateExperiences(profileData);
})()
 