function projectsCreation(input){

    let name = input[0];
    let numberOfProjects = Number(input[1]);

    let totalTime = numberOfProjects * 3;

    console.log(`The architect ${name} will need ${totalTime} hours to complete ${numberOfProjects} project/s.`);
    
}

projectsCreation(["Ivan", 6]);