const defaultConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [2, 'always', ['sentence-case', 'start-case']]
  },
  ignores: [message => /^Bumps \[.+]\(.+\) from .+ to .+\.$/m.test(message)]
}

module.exports = defaultConfig
