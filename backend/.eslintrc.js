// eslint-disable-next-line no-undef
module.exports = {
  root:true,
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',    
    'prettier',    
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'commonjs',
  },
  
 
};
