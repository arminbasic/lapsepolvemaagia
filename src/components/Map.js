import React from 'react'
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from 'react-google-maps'
import Spinner from 'react-spinkit'

export default props => (
  <InnerMap
    isMarkerShown
    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.31&libraries=geometry,drawing,places"
    loadingElement={<Spinner name="folding-cube" />}
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
)

const InnerMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 58.9408503, lng: 23.5303353 }}
    >
      {props.isMarkerShown && (
        <Marker position={{ lat: 58.9408503, lng: 23.5303353 }} />
      )}
    </GoogleMap>
  ))
)
