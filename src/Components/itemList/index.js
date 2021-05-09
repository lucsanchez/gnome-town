import { makeStyles, List, Divider } from '@material-ui/core';
import React from 'react';
import { ProfessionSelector } from '../Common/professionFilter';
import { SearchAppBar } from '../Common/searchBar';
import { Item } from '../item';
import { Loader } from '../Loading';
import { useTownProvider } from '../Provider/gnomeTownProvider';
import { useLoadingProvider } from '../Provider/loadingProvider';

export const ItemList = () => {
  const { loading } = useLoadingProvider()
  const { filteredItems } = useTownProvider()
  console.log('rendered')
  const classes = useStyles()

  return (
    <>
      {loading ? 
      <Loader /> :
        <React.Fragment>
          <SearchAppBar />
          <ProfessionSelector />
          {filteredItems.length > 0 ? (
            <>

              <List className={classes.root}>
                {filteredItems.map((item) =>
                  <React.Fragment key={item.id}>
                    <Item item={item} />
                    <Divider variant="inset" component="li" />
                  </React.Fragment>

                )}
              </List>
            </>

          )

            : <div style={{ marginTop: '5%' }}>Not found Results</div>
          }
        </React.Fragment>
      }
    </>)

}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  }
}));