import React, { Component } from 'react';
import MobileClientOverviewList from './MobileClientOverviewList';
import { MobileClientBuildList } from './MobileClientBuildList';

// TODO: Mocked data for now.
const mobileClients = {
  "myapp-android": {
    "apiVersion": "mobile.k8s.io/v1alpha1",
    "kind": "MobileClient",
    "metadata": {
      "annotations": {
        "aerogear.org/service-instance-name": "dh-android-app-apb-frx45",
        "icon": "fa fa-android"
      },
      "clusterName": "",
      "creationTimestamp": "2018-07-20T09:37:48Z",
      "name": "myapp-android",
      "namespace": "ansible-service-broker",
      "resourceVersion": "68060",
      "selfLink": "/apis/mobile.k8s.io/v1alpha1/namespaces/ansible-service-broker/mobileclients/myapp-android",
      "uid": "90647a14-8c00-11e8-9cc7-c85b76719196"
    },
    "spec": {
      "apiKey": "dbda59f8-6484-59e1-9b4d-22ec3ff48912",
      "appIdentifier": "org.test.client",
      "clientType": "android",
      "name": "myapp"
    }
  },
  "myapp-cordova": {
    "apiVersion": "mobile.k8s.io/v1alpha1",
    "kind": "MobileClient",
    "metadata": {
      "annotations": {
        "aerogear.org/service-instance-name": "dh-cordova-app-apb-crw7h",
        "icon": "font-icon icon-cordova"
      },
      "clusterName": "",
      "creationTimestamp": "2018-07-20T09:41:13Z",
      "name": "myapp-cordova",
      "namespace": "ansible-service-broker",
      "resourceVersion": "68628",
      "selfLink": "/apis/mobile.k8s.io/v1alpha1/namespaces/ansible-service-broker/mobileclients/myapp-cordova",
      "uid": "0a874be8-8c01-11e8-9cc7-c85b76719196"
    },
    "spec": {
      "apiKey": "e9a6a24c-3d56-5844-acaf-adf6ee806bde",
      "appIdentifier": "test-cordova.app",
      "clientType": "cordova",
      "name": "myapp"
    }
  },
  "myapp-ios": {
    "apiVersion": "mobile.k8s.io/v1alpha1",
    "kind": "MobileClient",
    "metadata": {
      "annotations": {
        "aerogear.org/service-instance-name": "dh-ios-app-apb-krgn5",
        "icon": "fa fa-apple"
      },
      "clusterName": "",
      "creationTimestamp": "2018-07-20T09:40:59Z",
      "name": "myapp-ios",
      "namespace": "ansible-service-broker",
      "resourceVersion": "68510",
      "selfLink": "/apis/mobile.k8s.io/v1alpha1/namespaces/ansible-service-broker/mobileclients/myapp-ios",
      "uid": "01f9a9e0-8c01-11e8-9cc7-c85b76719196"
    },
    "spec": {
      "apiKey": "367214cf-4bc1-5d33-8612-2736b9bc6181",
      "appIdentifier": "test.ios.app",
      "clientType": "iOS",
      "name": "myapp"
    }
  },
  "myapp-xamarin": {
    "apiVersion": "mobile.k8s.io/v1alpha1",
    "kind": "MobileClient",
    "metadata": {
      "annotations": {
        "aerogear.org/service-instance-name": "dh-xamarin-app-apb-42dq6",
        "icon": "font-icon icon-xamarin"
      },
      "clusterName": "",
      "creationTimestamp": "2018-07-20T09:41:28Z",
      "name": "myapp-xamarin",
      "namespace": "ansible-service-broker",
      "resourceVersion": "68746",
      "selfLink": "/apis/mobile.k8s.io/v1alpha1/namespaces/ansible-service-broker/mobileclients/myapp-xamarin",
      "uid": "133cf8f4-8c01-11e8-9cc7-c85b76719196"
    },
    "spec": {
      "apiKey": "d6b47d76-b8fa-572f-aad9-4451bce77e99",
      "appIdentifier": "test.xamarin.app",
      "clientType": "xamarin",
      "name": "myapp"
    }
  }
};

// TODO: Mocked data for now.
const mobileClientBuilds = [
  {
    "metadata": {
      "name": "android-debug-2",
      "selfLink": "/apis/build.openshift.io/v1/namespaces/myproject/builds/android-debug-2",
      "annotations": {
        "openshift.io/build.number": "2"
      }
    },
    "status": {
      "phase": "Failed",
      "startTimestamp": "2018-07-23T15:18:04Z",
      "completionTimestamp": "2018-07-24T15:19:35Z",
      "config": {
        "kind": "BuildConfig",
        "namespace": "myproject",
        "name": "android-debug"
      },
      "output": {}
    },
    "kind": "Build",
    "apiVersion": "build.openshift.io/v1"
  },
  {
    "metadata": {
      "name": "ios-debug-1",
      "selfLink": "/apis/build.openshift.io/v1/namespaces/myproject/builds/ios-debug-1",
      "annotations": {
        "openshift.io/build.number": "1"
      }
    },
    "status": {
      "phase": "Complete",
      "startTimestamp": "2018-07-25T15:18:04Z",
      "completionTimestamp": "2018-07-24T15:19:35Z",
      "config": {
        "kind": "BuildConfig",
        "namespace": "myproject",
        "name": "ios-debug"
      },
      "output": {}
    },
    "kind": "Build",
    "apiVersion": "build.openshift.io/v1"
  },
  {
    "metadata": {
      "name": "cordova-release-2",
      "selfLink": "/apis/build.openshift.io/v1/namespaces/myproject/builds/ios-debug-1",
      "annotations": {
        "openshift.io/build.number": "3"
      }
    },
    "status": {
      "phase": "Running",
      "startTimestamp": "2018-07-25T15:18:04Z",
      "completionTimestamp": "2018-07-24T15:19:35Z",
      "config": {
        "kind": "BuildConfig",
        "namespace": "myproject",
        "name": "cordova-release"
      },
      "output": {}
    },
    "kind": "Build",
    "apiVersion": "build.openshift.io/v1"
  }
];


class Overview extends Component {
  render() {
    return (
      <div>
        <MobileClientOverviewList mobileClients={mobileClients}></MobileClientOverviewList>
        <MobileClientBuildList mobileClientBuilds={mobileClientBuilds}></MobileClientBuildList>
      </div>
    );
  }
}

export default Overview;
