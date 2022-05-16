import { Fragment, ReactElement, useState, useEffect } from "react";
import { Startup } from "../../Types/Startup";
import StartupListItem from './StartupListItem';
import { StartupHttpService } from '../../Http/Startup/Startup.http.service';
import { Grid } from "@mui/material";

export default function StartupList(): ReactElement {

  const [items, setItems] = useState<Startup[]>([]);
  const [dataIsLoaded, setDataIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    StartupHttpService.getStartups()
      .then(data => {
        setItems(data)
        setDataIsLoaded(true)
      })
  }, [])

  return <Fragment>
    <Grid container id="startup-list">
      {
        dataIsLoaded && items.map(item => {
          return (
            <Grid item key={item.id} xs={12}>
              <StartupListItem  {...item} />
            </Grid>
          )
        })
      }
    </Grid>

  </Fragment>;
}
