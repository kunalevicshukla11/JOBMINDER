const createJob = async(req, res)=>{
    res.send('create Job')
}


const getAllJobs = async(req, res)=>{
    res.send('get all Job')
}


const updateJob = async(req, res)=>{
    res.send('update Job')
}


const deleteJob = async(req, res)=>{
    res.send('delete Job')
}


const showStats= async(req, res)=>{
    res.send('show stats')
}

export {createJob, getAllJobs, updateJob, deleteJob, showStats}



