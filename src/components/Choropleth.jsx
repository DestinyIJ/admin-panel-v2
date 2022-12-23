import React, { useState, useRef } from 'react'
import { ResponsiveChoropleth } from '@nivo/geo'
import { ThemeTokens } from '../Theme'
import { useTheme } from '@mui/material'
import GeoFeatures from '../data/GeoFeatures'
import { Box, Button, ButtonGroup } from '@mui/material'
import { ZoomIn, ZoomOut, North, East, South, West } from '@mui/icons-material'

const Choropleth = ({ data, isDashboard=false }) => {
    const mapRef = useRef();
    const theme = useTheme()
    const colors = ThemeTokens(theme.palette.mode)
    const [projectionScale, setProjectionScale] = useState(100)
    const [translation, setTranslation] = useState([0.5, 0.5])

    const ZoomInOut = ({mode}) => {
        if(mode === "in") {
            setProjectionScale((prev) => (prev + 5))
        } else if(mode === "out") {
            setProjectionScale((prev) => (prev - 5))
        }
    }

    const Translate = ({ axis, direction }) => {
        if(axis === "x" && direction === "right") {
            setTranslation((prev) => ([prev[0] + 0.05, prev[1]]))
        } else if(axis === "x" && direction === "left") {
            setTranslation((prev) => ([prev[0] - 0.05, prev[1]]))
        } else if(axis === "y" && direction === "up") {
            setTranslation((prev) => ([prev[0], prev[1] - 0.05]))
        } else if(axis === "y" && direction === "down") {
            setTranslation((prev) => ([prev[0], prev[1] + 0.05]))
        }
    }


    return (
        <div className='h-full relative' ref={mapRef} draggable>
            <ResponsiveChoropleth
                data={data}
                features={GeoFeatures.features}
                theme={{
                    axis: {
                        domain: {
                            line: {
                            stroke: colors.gray[100],
                            strokeWidth: 1
                            }
                        },
                        legend: {
                            text: {
                            fontSize: 18,
                            fill: colors.gray[100]
                            }
                        },
                        ticks: {
                            line: {
                            stroke: colors.gray[100],
                            strokeWidth: 3
                            }, 
                            text: {
                            fontSize: 14,
                            fill: colors.gray[100]
                            }
                        }
                    },
                    legends: {
                        title: {
                            text: {
                            fontSize: 14,
                            fill: colors.gray[100]
                            }
                        },
                        text: {
                            fontSize: 14,
                            fill: colors.gray[100]
                        }
                    },
                    tooltip: {
                        container: {
                            color: colors.gray[900],
                            backgroundColor: colors.primary[200]
                        }
                    }
                }}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                colors="nivo"
                domain={[ 0, 1000000 ]}
                unknownColor="#666666"
                label="properties.name"
                valueFormat=".2s"
                projectionScale={isDashboard ? 50 : projectionScale}
                projectionTranslation={isDashboard ? [0.49, 0.6]: translation}
                projectionRotation={[ 0, 0, 0 ]}
                enableGraticule={true}
                graticuleLineColor="#dddddd"
                borderWidth={1.2}
                borderColor="#152538"
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: '#38bcb2',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#eed312',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    },
                    {
                        id: 'gradient',
                        type: 'linearGradient',
                        colors: [
                            {
                                offset: 0,
                                color: '#000'
                            },
                            {
                                offset: 100,
                                color: 'inherit'
                            }
                        ]
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'NGA'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'ATA'
                        },
                        id: 'gradient'
                    }
                ]}
                legends={isDashboard ? undefined : [
                    {
                        anchor: 'bottom-left',
                        direction: 'column',
                        justify: true,
                        translateX: 20,
                        translateY: -100,
                        itemsSpacing: 0,
                        itemWidth: 94,
                        itemHeight: 18,
                        itemDirection: 'left-to-right',
                        itemTextColor: colors.gray[100],
                        itemOpacity: 0.85,
                        symbolSize: 18,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: colors.greenAccent[400],
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
            {
                !isDashboard && (
                    <Box className=' absolute top-1 right-4 flex flex-col gap-2 justify-between'>
                        <ButtonGroup orientation="vertical" size="large" aria-label="large button group">
                            <Button variant='text' onClick={() => ZoomInOut({mode:"in"})} startIcon={<ZoomIn sx={{ color: colors.primary[100]}}  />} />
                            <Button variant='text' onClick={() => ZoomInOut({mode:"out"})} startIcon={<ZoomOut sx={{ color: colors.primary[100]}} />} />
                        </ButtonGroup>
                        <ButtonGroup orientation="vertical" size="large" aria-label="large button group">
                            <Button variant='text' onClick={() => Translate({axis: "x", direction:"left"})} startIcon={<West sx={{ color: colors.primary[100]}} />} />
                            <Button variant='text' onClick={() => Translate({axis: "x", direction:"right"})} startIcon={<East sx={{ color: colors.primary[100]}} />} />
                        </ButtonGroup>
                        <ButtonGroup orientation="vertical" size="large" aria-label="large button group">
                            <Button variant='text' onClick={() => Translate({axis: "y", direction:"up"})} startIcon={<North sx={{ color: colors.primary[100]}} />} />
                            <Button variant='text' onClick={() => Translate({axis: "y", direction:"down"})} startIcon={<South sx={{ color: colors.primary[100]}} />} />
                        </ButtonGroup>
                    </Box>
                )
            }
        </div>
    )
}

export default Choropleth
