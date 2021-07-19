
const analyzeCommits = (pluginConfig, context) =>{
  console.log("pluginConfig:", pluginConfig)
  const { subjectFilter, type } = pluginConfig
  const { commits } = context
  // console.log("context:", context)
  // console.log("commits:", JSON.stringify(context.commits, null, 2))

  if (!type) return

  const filteredCommits = commits.filter(commit => {
    const regex = subjectFilter !== undefined && (typeof subjectFilter === 'string') ? new RegExp(subjectFilter) : subjectFilter
    if (!regex) return true
    const keep = regex.test(commit.subject)
    // console.log(`keep = ${keep ? 'true':'false'} for subject: '${commit.subject}'`)
    return keep
  })
  if (filteredCommits.length === 0) return
  //  console.log("Apply type:", type)
  return type
} 

module.exports = {
  analyzeCommits
}