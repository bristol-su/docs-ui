'use strict'

module.exports = (name) => {
  return name.includes('support') || name.includes('control-api') || name === 'api-client-php-toolkit'
}
