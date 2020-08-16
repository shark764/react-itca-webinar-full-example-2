import React, { useContext } from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardHeader,
} from '@material-ui/core';
import HeadsetIcon from '@material-ui/icons/Headset';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import moment from 'moment';

import { RecordContext } from '../context/RecordContext';

const Item = ({ record }) => {
  const [, setSelectedRecord] = useContext(RecordContext);

  return (
    <Card>
      <CardHeader
        title={record.title}
        titleTypographyProps={{ color: 'primary' }}
        subheader={`Added: ${moment(record.createdAt).format('LL')}`}
        subheaderTypographyProps={{ variant: 'subtitle2' }}
      />

      <CardActionArea onClick={event => setSelectedRecord(record)}>
        <CardMedia
          style={{
            height: 0,
            paddingTop: '56.25%', // 16:9
          }}
          image={record.image}
          title={record.title}
        />

        <CardContent>
          <Typography gutterBottom variant="h6" color="secondary" component="h4">
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
      </CardActionArea>

      <CardActions>
        <Button size="small" color="primary" startIcon={<HeadsetIcon />} href={record.listenUrl} target="_blank">
          Listen
        </Button>
        <Button size="small" color="secondary" startIcon={<ShoppingCartIcon />} href={record.buyItUrl} target="_blank">
          Buy it
        </Button>
      </CardActions>
    </Card>
  );
};

export default Item;
