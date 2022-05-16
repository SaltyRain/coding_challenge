import { Fragment, ReactElement} from "react";
import { Card, Typography,  } from '@mui/material';
// import StartupListItem from './StartupListItem';
import { StartupHttpService }  from '../../Http/Startup/Startup.http.service';

export default function StartupList(): ReactElement {


  const data = StartupHttpService.getStartups();;
  return <Fragment>

    {/* {
      startups.map((startup, startup_idx) => {
        console.log(startup)
        return (
          <Card key={startup_idx}>
            <Typography variant={'h4'} component={'h3'}>Test</Typography>
          
          </Card>
      )})
    } */}


  </Fragment>;
}
