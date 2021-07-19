# Custom semantic release plugin

## analyzeCommits Options

| Option | Description |
|---------|----------|
| subjectFilter |  string or regexp used to detect commit by subject. If found, release type is set to "type" value |
| type | release type if plugin find commits with message's subject conform to subjectFilter ('minor', 'major', 'patch', 'preminor', etc) |

## Publish

```
yarn config set registry https://registry.npmjs.org
YARN_REGISTRY=https://registry.npmjs.org yarn publish --access public

```