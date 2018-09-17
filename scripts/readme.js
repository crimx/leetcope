const fs = require('fs-extra')
const path = require('path')
const grayMatter = require('gray-matter')

const contentHead = `# Leetcope [![Build Status](https://travis-ci.org/crimx/leetcope.svg?branch=master)](https://travis-ci.org/crimx/leetcope)

Leetcode solutions in JavaScript. Most of them are within the top 90% of JavaScript runtime distribution (2018).

Templates are generated via [Leetmark](https://github.com/crimx/crx-leetmark).


[![Creative Commons License](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)][license]

This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][license].

[license]: http://creativecommons.org/licenses/by-nc-sa/4.0/
`

main()

async function main () {
  const names = (await fs.readdir(path.join(__dirname, '../problems/')))
    .filter(name => /^\d\d\d\..*\.md$/.test(name))

  const matters = await Promise.all(
    names.map(async name =>
      grayMatter(await fs.readFile(path.join(__dirname, '../problems/', name))).data
    )
  )

  const content = [
    contentHead,
    '<hr>',
    genDifficulty(names, matters),
    '<hr>',
    genTopicsAndQuestions('Related Topics', names, matters),
    '<hr>',
    genTopicsAndQuestions('Similar Questions', names, matters),
    '<hr>',
  ].join('\n\n')

  await fs.writeFile(path.join(__dirname, '../README.md'), content)

  console.log(`Generated ${names.length} files.`)
}

function genDifficulty (names, matters) {
  const difficultyMap = matters.reduce((map, matter, i) => {
    const arr = map.get(matter.Difficulty) || []
    arr.push(`- [${names[i]}](./problems/${encodeURIComponent(names[i])})`)
    return map.set(matter.Difficulty, arr)
  }, new Map())

  return wrapDetails(
    '<strong>Difficulty</strong>',
    ['Easy', 'Medium', 'Hard'].map(level => wrapDetails(
      level,
      difficultyMap.get(level).join('\n'),
      2,
    )).join('\n')
  )
}

function genTopicsAndQuestions (field, names, matters) {
  const topicMap = matters.reduce((map, matter, i) => {
    if (matter[field]) {
      Object.keys(matter[field]).forEach(topic => {
        const arr = map.get(topic) || []
        arr.push(`- [${names[i]}](./problems/${encodeURIComponent(names[i])})`)
        map.set(topic, arr)
      })
    }
    return map
  }, new Map())

  return wrapDetails(
    `<strong>${field}</strong>`,
    [...topicMap.keys()].sort().map(topic => wrapDetails(
      topic,
      topicMap.get(topic).join('\n'),
      2,
    )).join('\n')
  )
}

function wrapDetails (summary, content) {
  return `<details>
<summary>${summary}</summary>

${content}
</details>
`
}
