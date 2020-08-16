import React, { useContext } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardHeader,
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import HeadsetIcon from '@material-ui/icons/Headset';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import moment from 'moment';
import { RecordContext } from '../context/RecordContext';

const Detail = () => {
  const [record] = useContext(RecordContext);

  return (
    <Grid container spacing={8}>
      <Grid item xs={12} sm={6} lg={4} xl={4}>
        <Card>
          <CardHeader
            title={record.title}
            titleTypographyProps={{ color: 'primary' }}
          />

          <hr style={{ margin: '0px 16px' }} />

          <CardContent>
            <Typography
              variant="body2"
              color="textPrimary"
              // align="justify"
              style={{ whiteSpace: 'pre-line' }}
            >
              {record.description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} lg={4} xl={4}>
        <Card>
          <CardHeader
            title={record.title}
            titleTypographyProps={{ color: 'primary' }}
            subheader={`Added: ${moment(record.createdAt).format('LL')}`}
            subheaderTypographyProps={{ variant: 'subtitle2' }}
          />

          <CardMedia
            style={{
              height: 0,
              paddingTop: '56.25%', // 16:9
            }}
            image={record.image}
            title={record.title}
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              color="secondary"
              component="h4"
            >
              {record.artist}
            </Typography>

            <Typography variant="body2" color="textPrimary" component="span">
              {`Released: `}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="span">
              {moment(record.releasedAt).format('LL')}
            </Typography>

            <br />

            <Typography variant="body2" color="textPrimary" component="span">
              {`Studio: `}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="span">
              {record.studio}
            </Typography>

            <br />

            <Typography variant="body2" color="textPrimary" component="span">
              {`Genre: `}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="span">
              {record.genre}
            </Typography>

            <br />

            <Typography variant="body2" color="textPrimary" component="span">
              {`Length: `}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="span">
              {moment.utc(record.duration).format('HH:mm:ss')}
            </Typography>

            <br />

            <Typography variant="body2" color="textPrimary" component="span">
              {`Label: `}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="span">
              {record.label}
            </Typography>

            <br />

            <Typography variant="body2" color="textPrimary" component="span">
              {`Producer: `}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="span">
              {record.producer}
            </Typography>
          </CardContent>

          <CardActions>
            <Button
              size="small"
              color="primary"
              startIcon={<HeadsetIcon />}
              href={record.listenUrl}
              target="_blank"
            >
              Listen
            </Button>
            <Button
              size="small"
              color="secondary"
              startIcon={<ShoppingCartIcon />}
              href={record.buyItUrl}
              target="_blank"
            >
              Buy it
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} lg={4} xl={4}>
        <Card>
          <CardHeader
            title={`Singles from ${record.title}`}
            titleTypographyProps={{ color: 'primary' }}
          />

          <CardContent>
            <TableContainer>
              <Table aria-label="tracklist">
                <TableHead>
                  <TableRow>
                    <TableCell>Track</TableCell>
                    <TableCell>Length</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {record.tracklist.map(track => (
                    <TableRow key={track.id}>
                      <TableCell component="th" scope="row">
                        <Button
                          size="small"
                          color="primary"
                          startIcon={<HeadsetIcon />}
                          href={track.listenUrl}
                          target="_blank"
                          style={{ textTransform: 'none' }}
                        >
                          {track.title}
                        </Button>
                      </TableCell>
                      <TableCell>
                        {moment.utc(track.duration).format('HH:mm:ss')}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Detail;
