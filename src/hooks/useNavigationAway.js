import { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { NavigationBlocker } from './NavigationBlocker'

export function useNavigationAway(canShowDialogPrompt) {
	const navigate = useNavigate()
	const currentLocation = useLocation()
	const [showDialogPrompt, setShowDialogPrompt] = useState(false)
	const [wantToNavigateTo, setWantNavigateTo] = useState(null)
	const [isNavigationConfirmed, setIsNavigateConfirmed] = useState(false)

	const handleNavigationBlocking = useCallback(
		(locationToNavigate) => {
			if (
				!isNavigationConfirmed &&
				locationToNavigate.location.pathname !==
					currentLocation.pathname
			) {
				setShowDialogPrompt(true)
				setWantNavigateTo(locationToNavigate)
				return false
			}
			return true
		},
		[isNavigationConfirmed],
	)

	const cancelNavigation = useCallback(() => {
		setIsNavigateConfirmed(false)
		setShowDialogPrompt(false)
	}, [])

	const confirmNavigation = useCallback(() => {
		setIsNavigateConfirmed(true)
		setShowDialogPrompt(false)
	}, [])

	useEffect(() => {
		if (isNavigationConfirmed && wantToNavigateTo) {
			navigate(wantToNavigateTo.location.pathname)
		}
	}, [isNavigationConfirmed, wantToNavigateTo])
	NavigationBlocker(handleNavigationBlocking, canShowDialogPrompt)
	return [showDialogPrompt, confirmNavigation, cancelNavigation]
}
