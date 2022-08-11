import React from 'react';
import { Grid, Typography } from '@mui/material';
import InputField from '../../FormFields/InputField';
import SelectField from '../../FormFields/SelectField';
import CheckboxField from '../../FormFields/CheckboxField'

const cities = [
  {
    value: undefined,
    label: 'None'
  },
  {
    value: '1',
    label: 'Álava'
  },
  {
    value: '2',
    label: 'Albacete'
  },
  {
    value: '3',
    label: 'Alicante'
  },
  {
    value: '4',
    label: 'Almería'
  },
  {
    value: '5',
    label: 'Asturias'
  },
  {
    value: '6',
    label: 'Ávila'
  },
  {
    value: '7',
    label: 'Badajoz'
  },
  {
    value: '8',
    label: 'Barcelona'
  },
  {
    value: '9',
    label: 'Burgos'
  },
  {
    value: '10',
    label: 'Cáceres'
  },
  {
    value: '11',
    label: 'Cádiz'
  },
  {
    value: '12',
    label: 'Cantabria'
  },
  {
    value: '13',
    label: 'Castellón'
  },
  {
    value: '14',
    label: 'Ciudad Real'
  },
  {
    value: '15',
    label: 'Córdoba'
  },
  {
    value: '16',
    label: 'Cuenca'
  },
  {
    value: '17',
    label: 'Girona'
  },
  {
    value: '18',
    label: 'Granada'
  },
  {
    value: '19',
    label: 'Guadalajara'
  },
  {
    value: '20',
    label: 'Guipúzcoa'
  },
  {
    value: '21',
    label: 'Huelva'
  },
  {
    value: '22',
    label: 'Huesca'
  },
  {
    value: '23',
    label: 'Jaén'
  },
  {
    value: '24',
    label: 'La Coruña'
  },
  {
    value: '25',
    label: 'La Rioja'
  },
  {
    value: '26',
    label: 'Las Palmas'
  },
  {
    value: '27',
    label: 'León'
  },
  {
    value: '28',
    label: 'Lleida'
  },
  {
    value: '29',
    label: 'Lugo'
  },
  {
    value: '30',
    label: 'Madrid'
  },
  {
    value: '31',
    label: 'Málaga'
  },
  {
    value: '32',
    label: 'Murcia'
  },
  {
    value: '33',
    label: 'Navarra'
  },
  {
    value: '34',
    label: 'Orense'
  },
  {
    value: '35',
    label: 'Palencia'
  },
  {
    value: '36',
    label: 'Pontevedra'
  },
  {
    value: '37',
    label: 'Salamanca'
  },
  {
    value: '38',
    label: 'Santa Cruz de Tenerife'
  },
  {
    value: '39',
    label: 'Segovia'
  },
  {
    value: '40',
    label: 'Sevilla'
  },
  {
    value: '41',
    label: 'Soria'
  },
  {
    value: '42',
    label: 'Tarragona'
  },
  {
    value: '43',
    label: 'Teruel'
  },
  {
    value: '44',
    label: 'Toledo'
  },
  {
    value: '45',
    label: 'Valencia'
  },
  {
    value: '46',
    label: 'Valladolid'
  },
  {
    value: '47',
    label: 'Vizcaya'
  },
  {
    value: '48',
    label: 'Zamora'
  },
  {
    value: '49',
    label: 'Zaragoza'
  },
  {
    value: '50',
    label: 'Ceuta'
  },
  {
    value: '51',
    label: 'Melilla'
  },
  {
    value: '52',
    label: 'Mallorca'
  },
  {
    value: '53',
    label: 'Menorca'
  },
  {
    value: '54',
    label: 'Ibiza'
  },
  {
    value: '55',
    label: 'Andorra la Vella'
  }
];

const states = [
  {
    value: undefined,
    label: 'None'
  },
  {
    value: '11',
    label: 'Andalucía'
  },
  {
    value: '22',
    label: 'Aragón'
  },
  {
    value: '33',
    label: 'Canarias'
  },
  {
    value: '44',
    label: 'Cantabria'
  },
  {
    value: '55',
    label: 'Castilla-La Mancha'
  },
  {
    value: '66',
    label: 'Castilla y León'
  },
  {
    value: '77',
    label: 'Cataluña'
  },
  {
    value: '88',
    label: 'Extremadura'
  },
  {
    value: '99',
    label: 'Galicia'
  },
  {
    value: '100',
    label: 'La Rioja'
  },
  {
    value: '101',
    label: 'Madrid'
  },
  {
    value: '102',
    label: 'Murcia'
  },
  {
    value: '103',
    label: 'Navarra'
  },
  {
    value: '104',
    label: 'Pais Vasco'
  },
  {
    value: '105',
    label: 'Ceuta'
  },
  {
    value: '106',
    label: 'Melilla'
  }, 
  {
    value: '107',
    label: 'Islas Baleares',
  }
];

const countries = [
  {
    value: null,
    label: 'None'
  },
  {
    value: '111',
    label: 'Spain'
  },
  {
    value: '222',
    label: 'Andorra'
  }
];

export default function AddressForm(props) {
  const {
    formField: {
      firstName,
      lastName,
      email,
      address1,
      city,
      state,
      zipcode,
      country,
      useAddressForPaymentDetails
    }
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={firstName.name} label={firstName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={lastName.name} label={lastName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={email.name} label={email.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={address1.name} label={address1.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={city.name}
            label={city.label}
            data={cities}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={state.name}
            label={state.label}
            data={states}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={zipcode.name} label={zipcode.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={country.name}
            label={country.label}
            data={countries}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <CheckboxField
            name={useAddressForPaymentDetails.name}
            label={useAddressForPaymentDetails.label}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
