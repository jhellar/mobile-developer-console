package web

import (
	"net/http"

	"github.com/aerogear/mobile-client-service/pkg/mobile"
	"github.com/labstack/echo"
)

type MobileServiceInstancesHandler struct {
	namespace             string
	serviceInstanceLister mobile.ServiceInstanceLister
}

func NewMobileServiceInstancesHandler(serviceInstanceLister mobile.ServiceInstanceLister, namespace string) *MobileServiceInstancesHandler {
	return &MobileServiceInstancesHandler{
		serviceInstanceLister: serviceInstanceLister,
		namespace:             namespace,
	}
}

func (msih *MobileServiceInstancesHandler) List(c echo.Context) error {
	si, err := msih.serviceInstanceLister.List(msih.namespace)
	if err != nil {
		c.Logger().Errorf("error listing service instances %v", err)
		return c.NoContent(http.StatusInternalServerError)
	}
	return c.JSON(http.StatusOK, si)
}