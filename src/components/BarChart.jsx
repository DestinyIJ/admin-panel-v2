import { ResponsiveBar } from '@nivo/bar'
import { ThemeTokens } from '../Theme'
import { useTheme } from '@mui/material'

const BarChart = ({ data, isDashboard = false }) => {
    const theme = useTheme()
    const colors = ThemeTokens(theme.palette.mode)

    return (
        <ResponsiveBar
            data={data}
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
            keys={[
                'hot dog',
                'burger',
                'sandwich',
                'kebab',
                'fries',
                'donut'
            ]}
            indexBy="country"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'nivo' }}
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
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'fries'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'sandwich'
                    },
                    id: 'lines'
                }
            ]}
            borderRadius={2}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: isDashboard ? undefined : 'country',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: isDashboard ? undefined : 'food',
                legendPosition: 'middle',
                legendOffset: -40
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            role="application"
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
            />
    )
}

export default BarChart
