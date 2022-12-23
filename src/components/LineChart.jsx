import { ResponsiveLine } from "@nivo/line"
import { ThemeTokens } from '../Theme'
import { useTheme } from '@mui/material'

const LineChart = ({data, isDashboard=false }) => {
    const theme = useTheme()
    const colors = ThemeTokens(theme.palette.mode)

    return (
        <ResponsiveLine
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
                        fontSize: 18,
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
            colors={isDashboard ? { datum: "color"} : { scheme: "nivo" }}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            curve="cardinal"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: isDashboard ? undefined : 'transportation',
                legendOffset: 40,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickValues: 5,
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: isDashboard ? undefined : 'count',
                legendOffset: -50,
                legendPosition: 'middle'
            }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor', modifiers: [] }}
            pointLabelYOffset={-12}
            enableArea={true}
            areaBlendMode="multiply"
            areaOpacity={0.85}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 105,
                    translateY: -25,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 90,
                    itemHeight: 36,
                    itemOpacity: 0.75,
                    symbolSize: 16,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    )
}

export default LineChart