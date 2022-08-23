import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MaterialTextField from '@material-ui/core/TextField'

const inputLabelBase = {
  transform: 'none',
  transition: 'none',
  position: 'initial',
  color: '#5b5b5b',
}

const styles = {
  materialLabel: {
    '&$materialFocused': {
      // color: '#aeaeae',
      color: 'white !important',
    },
    '&$materialError': {
      // color: '#aeaeae',
      color: 'white !important',
    },
    fontWeight: '400',
    color: 'white !important',
  },
  materialFocused: {},
  materialUnderline: {
    '&:after': {
      borderBottom: '2px solid #f7861c',
      color: 'white !important',
    },
  },
  materialError: {},
  materialWhitePaddedRoot: {
    // color: '#aeaeae',
    color: 'white !important',
  },
  materialWhitePaddedInput: {
    padding: '8px',
    color: 'white !important',

    '&::placeholder': {
      // color: '#aeaeae',
      color: 'white !important',
    },
  },
  materialWhitePaddedFocused: {
    color: '#fff !important',
  },
  materialWhitePaddedUnderline: {
    color: 'white !important',
    '&:after': {
      borderBottom: '2px solid #fff',
    },
  },
  // Non-material styles
  formLabel: {
    '&$formLabelFocused': {
      // color: '#5b5b5b',
      color: 'white !important',
    },
    '&$materialError': {
      color: '#5b5b5b',
      color: 'white !important',
    },
  },
  formLabelFocused: { color: 'white !important' },
  inputFocused: { color: 'white !important' },
  inputRoot: {
    'label + &': {
      marginTop: '9px',
      color: 'white !important',
    },
    border: '1px solid #BBC0C5',
    height: '48px',
    borderRadius: '6px',
    padding: '0 16px',
    display: 'flex',
    alignItems: 'center',
    color: 'white !important',
    '&$inputFocused': {
      border: '1px solid #2f9ae0',
    },
  },
  largeInputLabel: {
    ...inputLabelBase,
    fontSize: '1rem',
    color: 'white !important',
  },
  inputLabel: {
    ...inputLabelBase,
    fontSize: '.75rem',
    color: 'white !important',
  },
  inputMultiline: {
    lineHeight: 'initial !important',
    color: 'white !important',
  },
}

const getMaterialThemeInputProps = ({
  dir,
  classes: { materialLabel, materialFocused, materialError, materialUnderline },
  startAdornment,
}) => ({
  InputLabelProps: {
    classes: {
      root: materialLabel,
      focused: materialFocused,
      error: materialError,
    },
  },
  InputProps: {
    startAdornment,
    classes: {
      underline: materialUnderline,
    },
    inputProps: {
      dir,
    },
  },
})

const getMaterialWhitePaddedThemeInputProps = ({
  dir,
  classes: {
    materialWhitePaddedRoot,
    materialWhitePaddedFocused,
    materialWhitePaddedInput,
    materialWhitePaddedUnderline,
  },
  startAdornment,
}) => ({
  InputProps: {
    startAdornment,
    classes: {
      root: materialWhitePaddedRoot,
      focused: materialWhitePaddedFocused,
      input: materialWhitePaddedInput,
      underline: materialWhitePaddedUnderline,
    },
    inputProps: {
      dir,
    },
  },
})

const getBorderedThemeInputProps = ({
  dir,
  classes: {
    formLabel,
    formLabelFocused,
    materialError,
    largeInputLabel,
    inputLabel,
    inputRoot,
    input,
    inputFocused,
  },
  largeLabel,
  startAdornment,
}) => ({
  InputLabelProps: {
    shrink: true,
    className: largeLabel ? largeInputLabel : inputLabel,
    classes: {
      root: formLabel,
      focused: formLabelFocused,
      error: materialError,
    },
  },
  InputProps: {
    startAdornment,
    disableUnderline: true,
    classes: {
      root: inputRoot,
      input,
      focused: inputFocused,
    },
    inputProps: {
      dir,
    },
  },
})

const themeToInputProps = {
  material: getMaterialThemeInputProps,
  bordered: getBorderedThemeInputProps,
  'material-white-padded': getMaterialWhitePaddedThemeInputProps,
}

const TextField = ({
  error,
  classes,
  theme,
  startAdornment,
  largeLabel,
  dir,
  ...textFieldProps
}) => {
  const inputProps = themeToInputProps[theme]({
    classes,
    startAdornment,
    largeLabel,
    dir,
  })

  return (
    <MaterialTextField
      error={Boolean(error)}
      helperText={error}
      {...inputProps}
      {...textFieldProps}
    />
  )
}

TextField.defaultProps = {
  error: null,
  dir: 'auto',
  theme: 'bordered',
}

TextField.propTypes = {
  error: PropTypes.string,
  classes: PropTypes.object,
  dir: PropTypes.string,
  theme: PropTypes.oneOf(['bordered', 'material', 'material-white-padded']),
  startAdornment: PropTypes.element,
  largeLabel: PropTypes.bool,
}

export default withStyles(styles)(TextField)
