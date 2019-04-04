import { grey } from '@material-ui/core/colors';
import { Overrides } from '@material-ui/core/styles/overrides';

const overrides: Overrides = {
  MuiTypography: {
    root: {
      color: '#ea0269',
    },
    colorSecondary: {
      color: '#000',
    },
  },

  // cards
  MuiCardContent: {
    root: {
      padding: 24,
    },
  },

  // pagination
  MuiTablePagination: {
    root: {
      border: 0,
    },
    input: {
      marginTop: '0 !important',
      margin: '0 16px',
    },
    toolbar: {
      justifyContent: 'center',
    },
    spacer: {
      display: 'none',
    },
    selectRoot: {
      marginLeft: 0,
      marginRight: 0,
    },
    selectIcon: {
      top: 1,
      right: 2,
    },
    select: {
      paddingRight: 8,
      borderRadius: 4,
      minWidth: 36,
    },
    actions: {
      marginLeft: 8,
    },
  },

  // form
  MuiFormControl: {
    root: {
      marginTop: '0 !important',
      marginBottom: '0 !important',
    },
  },

  // input
  MuiInputBase: {
    root: {
      border: '1px solid #E0E2F8',
      borderRadius: 4,
      transition: 'border-color, box-shadow, 0.3s',
      background: 'white',

      '&$focused': {
        borderColor: '#b7bcf7',
      },
    },
  },

  MuiInputAdornment: {
    root: {
      color: '#ccc',
      marginLeft: '16px !important',
      marginRight: 12,
    },
  },

  MuiIconButton: {
    root: {
      padding: 5,
    },
  },

  MuiInput: {
    input: {
      padding: '10px 12px',
      fontSize: 15,
      color: '#888',
      transition: 'border-color, box-shadow, 0.3s',
      opacity: 1,

      '&::placeholder': {
        opacity: 1,
      },
    },
    underline: {
      '&:before, &:after': {
        display: 'none',
      },
    },
    inputMultiline: {
      marginTop: 4,
    },
  },

  // label
  MuiFormLabel: {
    root: {
      fontSize: 15,
      color: '#596375',
    },
  },

  MuiInputLabel: {
    shrink: {
      transform: 'none',
    },
    formControl: {
      transform: 'none',
    },
  },

  // select
  MuiSelect: {
    select: {
      borderRadius: 4,

      '&:focus': {
        borderRadius: 4,
      },
    },

    icon: {
      top: 'calc(50% - 12px)',
      right: 8,
    },

    selectMenu: {
      whiteSpace: 'normal',
    },
  },

  MuiExpansionPanelDetails: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      padding: 16,
    },
  },

  MuiSwitch: {
    switchBase: {
      height: 24,
      color: '#98A5BC',
      checked: {
        ['& + $bar' as any]: {
          backgroundColor: '#93E35D',
        },
      },
    },
    icon: {
      color: '#FFF',
    },
    bar: {
      background: '#98A5BC',
    },
    colorSecondary: {
      color: '#ccc',
    },
  },

  MuiFormControlLabel: {
    root: {
      marginRight: 24,
    },
  },

  // snackbar
  MuiSnackbarContent: {
    root: {
      backgroundColor: '#27ae60',
    },
    message: {
      fontWeight: 500,
    },
  },

  // chips
  MuiChip: {
    root: {
      height: 18,
      marginRight: 4,
      marginBottom: 2,
      fontSize: 12,
      background: grey[200],
    },
  },

  // Dialog
  MuiDialog: {
    paperScrollPaper: {
      maxHeight: 'calc(100% - 30px)',
    },
  },

  MuiDialogTitle: {
    root: {
      padding: 16,
    },
  },

  MuiDialogContent: {
    root: {
      padding: '0 16px',
    },
  },
};

export default overrides;
