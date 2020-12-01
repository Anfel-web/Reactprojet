function getJobName(job,name) {
    if(job==="developpeur" ) {
    return `${name} informaticien`;
    
}else if (job==="prof" ) {

return `${name} proffesseur`;
}
else
return `${name} footbolleur`;
};
export default getJobName ;